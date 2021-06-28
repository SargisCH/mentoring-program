import { useState, useEffect } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { toastr } from 'react-redux-toastr';
import useData from '../../hooks/useData';
import { moveElement, sortByProperty } from '../../utils/array';
import { retrieve } from '../../services/mentorService';
import Button from '../Button/Button';

const MENTORS_LIMIT = 5;
const onError = (err) => toastr.error('Error retrieveing Mentors', err.message);
export default function MentorList({ onSubmit: submit, department = '', selectedMentors = [] }) {
  const [mentors, setMentors] = useState([]);
  const { data: originalMentors = [] } = useData(null, retrieve, onError);
  useEffect(() => {
    const selectedMentorsData = [];
    selectedMentors.forEach((mentorID) => {
      const mentorData = originalMentors.find(((originalMentor) => mentorID === originalMentor.id));
      if (mentorData) selectedMentorsData.push(mentorData);
    });
    const unselectedMentors = originalMentors.filter((m) => !selectedMentors.includes(m.id));
    const sortedMentors = selectedMentorsData.concat(sortByProperty(unselectedMentors, 'department', department));
    setMentors(sortedMentors);
  }, [originalMentors, department, selectedMentors]);
  const onDragEnd = (result) => {
    const { destination, source } = result;
    if (!destination) return;
    if (
      destination.droppableId === source.droppableId
      && destination.index === source.index
    ) return;
    const desI = destination.index;
    const srcI = source.index;
    const mentorsCopied = moveElement(mentors, srcI, desI);
    setMentors(mentorsCopied);
  };
  const removeMentor = (id) => {
    if (mentors.length <= MENTORS_LIMIT) return;
    setMentors(mentors.filter((m) => m.id !== id));
  };
  const finish = () => {
    submit(mentors.slice(0, MENTORS_LIMIT).map((m) => m.id));
  };
  return (
    <div>
      <DragDropContext onDragEnd={onDragEnd}>
        <div className="shadow-md overflow-hidden sm:rounded-md bg-gray-100">
          <Droppable droppableId="mentors">
            {
              (provided) => (
                <div className="px-4 py-5 bg-white sm:p-6" {...provided.droppableProps} ref={provided.innerRef}>
                  {mentors.slice(0, MENTORS_LIMIT).map((mentor, index) => (
                    <Draggable key={mentor.id} draggableId={`mentor_${mentor.id}`} index={index}>
                      {
                        (draggableProvided) => (
                          <div
                            ref={draggableProvided.innerRef}
                            className="border rounded-lg p-4 bg-gray-200 cursor-pointer my-3 flex justify-between"
                            draggable
                            {...draggableProvided.draggableProps}
                            {...draggableProvided.dragHandleProps}
                          >
                            <div>
                              <span>
                                {`${mentor.firstName} ${mentor.lastName}`}
                              </span>
                              <span className="mx-2">|</span>
                              <span>
                                {mentor.department}
                              </span>
                              <span className="mx-2"> | </span>
                              <span>
                                {mentor.jobTitle}
                              </span>
                            </div>
                            <span
                              className="text-white hover:text-red-500 cursor-pointer self-end"
                              onClick={(() => removeMentor(mentor.id))}
                            >
                              Delete
                            </span>
                          </div>
                        )
                      }
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )
            }
          </Droppable>
        </div>
      </DragDropContext>

      <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
        <Button onClick={finish}>
          Finish
        </Button>
      </div>
    </div>
  );
}

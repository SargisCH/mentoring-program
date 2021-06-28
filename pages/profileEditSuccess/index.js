import React from 'react';
import authenticatedRoute from '../../hocs/authenticatedRoute';

export default authenticatedRoute(() => (
  <div className="mt-10">
    <div className="grid justify-items-center">
      <div className="text-center">
        <div className="px-4 sm:px-0">
          <h3 className="text-lg font-medium leading-6 text-gray-900">Your Profile is successfully edited</h3>
        </div>
      </div>
    </div>
  </div>
));

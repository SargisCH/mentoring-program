import router from "next/router";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { links } from "../router";

const authenticatedRoute = (Component = null,) => {
  return function AuthenticatedRoute (){
    const user = useSelector(state => state.user);
    useEffect(() => {
      if(!user.id) router.push(links.signIn);
    }, [user.id])
    if(!user.id) return null;
    return (
      <Component />
    ); 
  }
};

export default authenticatedRoute;
import React, { useState } from "react";

interface adminStateInterface {
  _id: string;
  name: string;
  email: string;
  password: string;
}
interface adminContextInterface {
  admin: adminStateInterface | null;
  setAdmin: Function;
}
interface blogDataInterface {
  title: string;
  body: string;
  image: string;
  searchTitle: string;
  blog_id: string;
  published: boolean;
}
interface blogDataContextInterface {
  blogData: Array<blogDataInterface>;
  setblogData: Function;
  isLoading: boolean;
  setIsLoading: Function;
}
const obj: blogDataContextInterface = {
  blogData: [],
  setblogData: function () {
    return;
  },
  isLoading: false,
  setIsLoading: function () {
    return;
  },
};
const AdminContext = React.createContext<adminContextInterface | null>(null);
const BlogDataContext = React.createContext<blogDataContextInterface>(obj);
export { AdminContext, BlogDataContext };
function Context(props: any) {
  const [admin, setAdmin] = useState<adminStateInterface | null>(null);
  const [blogData, setblogData] = useState<Array<blogDataInterface>>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  return (
    <AdminContext.Provider value={{ admin, setAdmin }}>
      <BlogDataContext.Provider
        value={{ blogData, setblogData, isLoading, setIsLoading }}
      >
        {props.children}
      </BlogDataContext.Provider>
    </AdminContext.Provider>
  );
}

export default Context;

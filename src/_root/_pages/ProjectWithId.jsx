import { collection, getDocs, query, where } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../../config/firebase.config";
import NewProject from "./NewProject";
import Spinner from "../../components/xothers/Spinner";
const ProjectWithId = () => {
  const { id } = useParams();
  const [projectData, setProjectData] = useState();
  const [owner, setowner] = useState();
  const getProject = async (id) => {
    const docRef = collection(db, "Projects");
    const docSnap = await getDocs(query(docRef, where("id", "==", id)));
    if (docSnap.docs) {
      setProjectData(docSnap.docs[0]._document.data.value.mapValue.fields);
      setowner(
        docSnap.docs[0]._document.data.value.mapValue.fields.owner.mapValue
          .fields
      );
    } else {
      console.log("couldn't find the project :(");
    }
  };
  useEffect(() => {
    getProject(id);
  }, []);
  return !projectData ? (
    <div className="flex items-center justify-center h-[100vh] w-screen ">
      <Spinner />
    </div>
  ) : (
    <>
      <NewProject data={projectData} owner={owner} />
    </>
  );
};

export default ProjectWithId;

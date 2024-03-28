import { collection, getDocs, getFirestore } from "firebase/firestore"; 


//this is a class to organize the return from the database
export class Project {
  constructor(projectName, startDate = null, deadline = null, description = null){
    this.projectName = projectName;
    this.startDate = startDate;
    this.deadline = deadline;
    this.description = description;

  }
}


//returns projects from 'Projects' and fills an array for use
export async function getProjectsFromFirestore() {
  try {
    const projectsCollectionRef = collection(firestore, 'Projects');
    const querySnapshot = await getDocs(projectsCollectionRef);
    const projects = [];
    querySnapshot.forEach(doc => {
      const projectData = doc.data();
      projects.push(projectData);
    });
    return projects;
  } catch (error) {
    console.error("Error fetching projects:", error);
    return [];
  }
}

//saves file to firebase to be read later
export function saveToFirestore(event) {
  event.preventDefault();
  setDoc(doc(firestore, "Projects", projectName.value), {
    projectName: projectName.value,
    startDate: startDate.value,
    deadline: deadline.value,
    description: description
  }).then(() => {
    console.log('Document written with ID: ', projectName.value);
  }).catch((error) => {
    console.error('Error adding document: ', error);
  });
  console.log("project uploaded");
}
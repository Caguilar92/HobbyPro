import { collection, getDocs, getFirestore } from "firebase/firestore"; 


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

// saves a new Project to the data base
export async function saveToFireStore(event) {
  event.preventDefault();//doesn't work without this.
  try {
    //gets a referance of the collection "Projects"
    const projectsCollectionRef = collection(firestore, "Projects");

    // Add a new document to the "Projects" collection with auto-generated ID
    const docRef = await addDoc(projectsCollectionRef, {
      projectName: projectName.value,
      startDate: startDate.value,
      deadline: deadline.value,
      description: description.value,
    });
    // adds a subcollection "Stages" using docRef
    // then adds an intial stage called "intial stage"
    const stagesCollectionRef = collection(docRef, "Stages");
    await addDoc(stagesCollectionRef, { stageName: "Initial Stage", isDone: false });

   
    console.log("Document written with ID: ", docRef.id);
    console.log("Project uploaded:", projectName.value);
  } catch (error) {
    console.error("Error adding document: ", error);
  } 
  location.reload();
}


// Retrieve data from Firestore and populate 'projects' array
export async function getDocsFromDatabase() {
  try{
    const projectsCollectionRef = collection(firestore, 'Projects');
    const querySnapshot = await getDocs(projectsCollectionRef);

    const projects = [];
    //fills projects array from firestore
    querySnapshot.forEach(doc => {
      const projectData = doc.data();
      // this whole using a "Project" object here may be a bad desision in the future.
      // Project object removed, passing doc.data (all data from the doc) instead. 
      // appending doc.data with doc's id before saving it.
      const projectInstance = {...projectData, uid: doc.id}
      projects.push(projectInstance);
    });
    // Return projects array
    return projects;
  } catch (error) {
    console.error("Error fetching projects:", error);
    return [];
  }
}

import { createStore } from 'vuex';
import { getDocs, getFirestore, collection } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebase = getFirestore();
const auth = getAuth();

export default createStore({
  state: {
    projects: [],
    selectedProject: null,
    stages: [],
    selctedStage: null,
    tasks: [],
    selectedTask: null,
  },
  getters: {
    getProjects: state => state.projects,
    getSelectedProject: state => state.selectedProject,
    getStages: state => state.stages,
    getSelectedStage: state => state.selctedStage,
    getTasks: state => state.tasks,
    getSelectedTask: state => state.selectedTask,
  },
  mutations: {
    setProjects(state, projects) {
      state.projects = projects;
    },
    setSelectedProject(state, project) {
      state.selectedProject = project;
    },
    setStages(state, stages) {
      state.stages = stages;
    },
    setSelectedStage(state, stage){
      state.setSelectedStage = stage;
    },
    setTasks(state, tasks){
      state.tasks = tasks;
    },
    setSelectedTask(state, task){
      state.setSelectedTask = task;
    },
  },
  actions: {
    async fetchProjects({ commit }, {docPath}) {
      try{
        const projects = [];
        const querySnapshot = await getDocs(collection(firebase, docPath));
        querySnapshot.forEach(doc => {
          const projectData = doc.data();
          // Project object removed, passing doc.data (all data from the doc) instead. 
          // appending doc.data with doc's id before saving it.
          const projectInstance = {...projectData, uid: doc.id};
          projects.push(projectInstance);         
        });
        console.log("fetchProjects complete, called from vuex", projects);
        commit('setProjects', projects);
      } catch (error){
        console.log("something terrible broke!!!!: ", error);
      }
    },
    async selectProject({ commit }, project){
      try {
        // Commit selected project
        commit('setSelectedProject', project);
        
        const docPath = auth.currentUser.email+'_Projects/';
        const stagesColletionRef = collection(firebase, docPath, project.uid, 'Stages');
        // Fetch stages
        const querySnapshot = await getDocs(stagesColletionRef);
        const stages = [];
        
        querySnapshot.forEach(doc => {
          const stageData = doc.data();
          console.log(doc.data());
          const stageInstance = {...stageData, uid: doc.id};
          stages.push(stageInstance);
        });
        console.log('here!');
        // Commit stages
        commit('setStages', stages);

        console.log("Stages set:", stages);
      } catch (error) {
        console.log('Error fetching stages:', error);
      }
    },

  },
});

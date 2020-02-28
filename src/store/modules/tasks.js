import { ADD_TASK, REMOVE_TASK } from '@/store/mutation-types';

const state = {
  tasks: [
    { id: 1, name: 'task1', done: false },
    { id: 2, name: 'task2', done: false },
    { id: 3, name: 'task3', done: false },
    { id: 4, name: 'task4', done: true }
  ]
};

const getters = {
  inWorkTasks: state => {
    return state.tasks.filter(todo => !todo.done);
  },
  doneTasks: state => {
    return state.tasks.filter(todo => todo.done);
  },
  lastId: state => {
    let max = 0;
    state.tasks.forEach(object => {
      if (object.id > max) {
        max = object.id;
      }
    });
    return max + 1
  }
};

const actions = {
  addTask({ getters, commit }, payload) {
    const object = { id: getters.lastId, name: `${payload.name}`, done: false }
    commit(ADD_TASK, object)
  },
  // removeTask({ commit }, payload) {
  //
  // }
};

const mutations = {
  [ADD_TASK](state, payload) {
    state.tasks.push(payload);
  },
  [REMOVE_TASK](state) {
    state.tasks['task'] = null;
  },

};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};

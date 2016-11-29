var expect = require('expect');
var reducers = require('reducers');
var df = require('deep-freeze-strict');
var moment = require('moment');

describe('Reducers', () => {
   describe('searchTextReducer', () => {
       it('should set searchText', () => {
          var action = {
              type: "SET_SEARCH_TEXT",
              text: 'dog'
          };

          var res = reducers.searchTextReducer(df(''), df(action));

          expect(res).toEqual(action.searchText);
       });

   });
    describe('showCompletedReducer', () => {
       it('should toggle show Completed flag Reducer (true to false)', () => {
           var action = {
               type: "TOGGLE_SHOW_COMPLETED"
           };

           var res = reducers.showCompletedReducer(df(true), df(action));

           expect(res).toEqual(false);
       });

       it('should toggle show Completed flag Reducer (false to true)', () => {
           var action = {
               type: "TOGGLE_SHOW_COMPLETED"
           };

           var res = reducers.showCompletedReducer(df(false), df(action));

           expect(res).toEqual(true);
       });
    });

    describe('todos reducer', () =>{
       it('should add new todo', () => {
         var action = {
           type: 'ADD_TODO',
           text: 'Walk the dog'
         };

         var res = reducers.todosReducer(df([]), df(action));
         expect(res.length).toEqual(1);
         expect(res[0].text).toEqual(action.text);
       });

        it('should toggle supplied todo completed status', () => {
           var state = [
               {
                   id: "123",
                   text: '1st todo',
                   completed: true,
                   createdAt: moment().unix(),
                   completedAt: undefined
               },
               {
                   id: "456",
                   text: '2nd todo',
                   completed: false,
                   createdAt: moment().unix(),
                   completedAt: undefined
               }
           ];
           var action = {
             type: "TOGGLE_TODO",
             id: state[0].id
           };
            var res = reducers.todosReducer(df(state), df(action));
            expect(res[0].completed).toEqual(false);
            expect(res[0].completedAt).toEqual(undefined);
        });
    });
});


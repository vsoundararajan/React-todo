var expect = require('expect');
var reducers = require('reducers');
var df = require('deep-freeze-strict');

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
});


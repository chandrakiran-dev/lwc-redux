public with sharing class TodoCC {
    
    @AuraEnabled
    public static Map<String, TodoWrapper> initialLoad(){
        Map<String, TodoWrapper> mapOfTodoById = new Map<String, TodoWrapper>();
        try {
            List<Todo__c> lstTodo = [Select Id, Content__c, Status__c from Todo__c];
            if(lstTodo.size() > 0){
                for(Todo__c todo : lstTodo){
                    mapOfTodoById.put(todo.Id, new TodoWrapper(todo));
                }
            }
            return mapOfTodoById;
        } catch (Exception e) {
            return mapOfTodoById;
        }
    }

    @AuraEnabled
    public static TodoWrapper addNewTodo(String content){
        try {
            TodoWrapper wrapper = new TodoWrapper();
            wrapper.content = content;
            wrapper.status = 'Incomplete';
            Todo__c todo  = TodoWrapper.getSobject(wrapper, true);
            insert todo;

            wrapper.id = todo.Id;
            return wrapper;
        } catch (Exception e) {
            return null;
        }
    }

    @AuraEnabled
    public static TodoWrapper changeTodoStatus(String strTodo){
        try {
            TodoWrapper wrapper = (TodoWrapper)JSON.deserialize(strTodo, TodoWrapper.class);
            Todo__c todo  = TodoWrapper.getSobject(wrapper, false);
            update todo;
            return wrapper;
        } catch (Exception e) {
            return null;
        }
    }
}
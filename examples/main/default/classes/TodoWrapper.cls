public with sharing class TodoWrapper {
    @AuraEnabled
    public String id {get;set;}

    @AuraEnabled
    public String content {get;set;}

    @AuraEnabled
    public String status {get;set;}

    public TodoWrapper(){}

    public TodoWrapper(Todo__c todo){
        this.id = todo.Id;
        this.content = todo.Content__c;
        this.status = todo.Status__c;
    }

    public static Todo__c getSobject(TodoWrapper wrapper, Boolean isCreate){
        Todo__c todo = new Todo__c();
        todo.Content__c = wrapper.content;
        todo.Status__c = wrapper.status;
        if(!isCreate){
            todo.Id = wrapper.id;
        }
        return todo;
    }
}

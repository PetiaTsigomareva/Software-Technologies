package issuetracker.bindingModel;

public class IssueBindingModel {

    private String title;

    private String content;

    private int priority;

    public IssueBindingModel() {
    }

    public IssueBindingModel(String title, String content, int priority) {
        this.title = title;
        this.content = content;
        this.priority = priority;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public int getPriority() {
        return priority;
    }

    public void setPriority(int priority) {
        this.priority = priority;
    }
}

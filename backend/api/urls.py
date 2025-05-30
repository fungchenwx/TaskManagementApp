from django.urls import path
from . import views

urlpatterns = [
    path("tasks/", views.TaskListCreate.as_view(), name="task-list"),
    path("notes/delete/<int:pk>/", views.TaskDelete.as_view(), name="delete-note")
]
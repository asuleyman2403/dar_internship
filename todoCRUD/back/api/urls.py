from django.urls import path
from api import views
urlpatterns = [
    path('todo/', views.TodoListAPIView.as_view()),
    path('todo/<int:pk>/', views.TodoAPIView.as_view())
]

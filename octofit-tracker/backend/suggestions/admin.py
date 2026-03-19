from django.contrib import admin
from .models import WorkoutSuggestion

@admin.register(WorkoutSuggestion)
class WorkoutSuggestionAdmin(admin.ModelAdmin):
    list_display = ['user', 'title', 'activity_type', 'difficulty_level', 'is_completed', 'created_at']
    list_filter = ['activity_type', 'difficulty_level', 'is_completed']
    search_fields = ['user__username', 'title', 'description']
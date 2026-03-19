from django.contrib import admin
from .models import UserProfile

@admin.register(UserProfile)
class UserProfileAdmin(admin.ModelAdmin):
    list_display = ['user', 'age', 'fitness_level', 'total_points']
    list_filter = ['fitness_level']
    search_fields = ['user__username', 'user__email']
from django.contrib import admin
from .models import Team

@admin.register(Team)
class TeamAdmin(admin.ModelAdmin):
    list_display = ['name', 'created_by', 'member_count', 'total_points', 'created_at']
    list_filter = ['created_at']
    search_fields = ['name', 'description', 'created_by__username']

    def member_count(self, obj):
        return obj.members.count()
    member_count.short_description = 'Members'
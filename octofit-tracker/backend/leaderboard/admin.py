from django.contrib import admin
from .models import LeaderboardEntry

@admin.register(LeaderboardEntry)
class LeaderboardEntryAdmin(admin.ModelAdmin):
    list_display = ['user', 'period', 'period_date', 'points', 'rank']
    list_filter = ['period', 'period_date']
    search_fields = ['user__username']
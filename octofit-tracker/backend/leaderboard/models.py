from django.db import models
from django.contrib.auth.models import User
from bson import ObjectId

class LeaderboardEntry(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    period = models.CharField(max_length=20, choices=[
        ('daily', 'Daily'),
        ('weekly', 'Weekly'),
        ('monthly', 'Monthly'),
        ('all_time', 'All Time'),
    ])
    period_date = models.DateField()
    points = models.IntegerField(default=0)
    rank = models.IntegerField()
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        db_table = 'leaderboard'
        unique_together = ['user', 'period', 'period_date']
        ordering = ['period', 'period_date', '-points']

    def __str__(self):
        return f"{self.user.username} - {self.period} - Rank {self.rank}"
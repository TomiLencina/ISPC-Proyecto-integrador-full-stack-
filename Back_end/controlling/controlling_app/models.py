from django.db import models
from django.contrib.auth.models import AbstractUser


class User(AbstractUser):


    SUBSCRIPTION_CHOICES = (
        ('free', 'Free'),
        ('monthly', 'Monthly'),
        ('annual', 'Annual'),
    )


    email = models.EmailField(max_length=50, unique=True)
    # password = models.CharField(max_length=20)
    # alias = models.CharField(max_length=20)
    nationality = models.CharField(max_length=3)
    subscription = models.CharField(max_length=10, choices=SUBSCRIPTION_CHOICES, default='free')

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username','password']

    def __str__(self):
        return f"User: {self.username} from {self.nationality}, email: {self.email}, subscription: {self.subscription}"


class Portfolio(models.Model):
    user = models.OneToOneField(
        User,
        on_delete=models.CASCADE,
        primary_key=True,
    )
    isPremium = models.BooleanField(default=False)

    def __str__(self):
        return f"Portfolio of {self.user.username}"


class Asset(models.Model):
    simbol = models.CharField(max_length=20)
    type = models.CharField(max_length=20)
    currency= models.CharField(max_length=4)
    broker= models.CharField(max_length=20) 


class Operation(models.Model):
    portfolio = models.ForeignKey(Portfolio, on_delete=models.CASCADE)
    asset = models.ForeignKey(Asset, on_delete=models.CASCADE)
    buy_date = models.DateField()
    buy_price = models.IntegerField(null=False)
    quantity = models.IntegerField(default=1)
    last_price = models.IntegerField(default=None)
    sell_date = models.DateField(null=True)

    def save(self, *args, **kwargs):
        if self.last_price is None:
            self.last_price = self.buy_price
        super().save(*args, **kwargs)

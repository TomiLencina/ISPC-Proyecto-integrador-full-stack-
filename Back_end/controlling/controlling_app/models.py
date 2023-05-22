from django.db import models


class User(models.Model):
    email = models.EmailField(max_length=50)
    password = models.CharField(max_length=20)
    alias = models.CharField(max_length=20)
    nationality = models.CharField(max_length=3)

    def __str__(self):
        return f"User: {self.alias} from {self.nationality}, email: {self.email}"


class Portfolio(models.Model):
    user = models.OneToOneField(
        User,
        on_delete=models.CASCADE,
        primary_key=True,
    )
    isPremium = models.BooleanField(default=False)


class Asset(models.Model):
    simbol = models.CharField(max_length=20)
    type = models.CharField(max_length=20)
    currency= models.CharField(max_length=4)
    broker= models.CharField(max_length=20) 


class Operation(models.Model):
    portfolio = models.ForeignKey(Portfolio, on_delete=models.CASCADE)
    asset = models.ForeignKey(Asset, on_delete=models.CASCADE)
    buy_date = models.DateField()
    buy_price = models.IntegerField()
    quantity = models.IntegerField(default=1)
    last_price = models.IntegerField(default=buy_price)
    sell_date = models.DateField(null=True)

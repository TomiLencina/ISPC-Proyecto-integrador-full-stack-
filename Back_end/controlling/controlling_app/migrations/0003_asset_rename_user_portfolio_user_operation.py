# Generated by Django 4.2.1 on 2023-05-18 18:48

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('controlling_app', '0002_portfolio_ispremium'),
    ]

    operations = [
        migrations.CreateModel(
            name='Asset',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('simbol', models.CharField(max_length=20)),
                ('type', models.CharField(max_length=20)),
                ('currency', models.CharField(max_length=4)),
                ('broker', models.CharField(max_length=20)),
            ],
        ),
        migrations.RenameField(
            model_name='portfolio',
            old_name='User',
            new_name='user',
        ),
        migrations.CreateModel(
            name='Operation',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('buy_date', models.DateField()),
                ('buy_price', models.IntegerField()),
                ('quantity', models.IntegerField(default=1)),
                ('last_price', models.IntegerField(default=models.IntegerField())),
                ('sell_date', models.DateField(null=True)),
                ('asset', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='controlling_app.asset')),
                ('portfolio', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='controlling_app.portfolio')),
            ],
        ),
    ]
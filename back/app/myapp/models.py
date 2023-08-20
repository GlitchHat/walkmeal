from django.db import models

# Create your models here.
class UserProfile(models.Model):
    userName = models.CharField(max_length=100, unique=True)
    points = models.PositiveIntegerField(default=0)
    total_steps = models.PositiveIntegerField(default=0)
    address = models.CharField(max_length=128)
    
    USERNAME_FIELD = 'userName'
    REQUIRED_FIELDS = []
    
    is_anonymous = False
    is_authenticated = True
    
    def __str__(self) -> str:
        return self.userName
    
class Store(models.Model):
    title = models.CharField(max_length=255)
    subtitle = models.CharField(max_length=255)
    photo = models.ImageField(upload_to='store_photos/')
    startTime = models.DateTimeField(auto_now_add=False)
    endTime = models.DateTimeField(auto_now_add=False)
    distance = models.PositiveIntegerField(default=0)
    
    def __str__(self):
        return self.title

class Menu(models.Model):
    store = models.ForeignKey(Store, on_delete=models.CASCADE)
    name = models.CharField(max_length=255)
    photo = models.ImageField(upload_to='menu_photos/')
    price = models.DecimalField(max_digits=10, decimal_places=1)

    def __str__(self):
        return self.name
    
# class Order(models.Model):
#     user = models.ForeignKey(UserProfile, on_delete=models.CASCADE)
#     menu = models.ForeignKey(Menu, on_delete=models.CASCADE)
#     steps = models.PositiveIntegerField(default=0)
#     points_awarded = models.BooleanField(default=False)
    
class Auction(models.Model):
    menu = models.ForeignKey(Menu, on_delete=models.CASCADE)
    startPrice = models.DecimalField(max_digits=10, decimal_places=1)
    endPrice = models.DecimalField(max_digits=10, decimal_places=1)
    endTime = models.DateTimeField(auto_now_add=False)
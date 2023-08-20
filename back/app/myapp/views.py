from django.shortcuts import render, HttpResponse, get_object_or_404
from django.http import JsonResponse
from .models import *

# Create your views here.
def index():
    pass

# 제목, 이미지, 부제목, 시간기간, 거리
def view_store(request):
    stores = Store.objects.all()

    store_data = []
    for store in stores:
        startTime = store.startTime.strftime("%I:%M %p")
        endTime = store.endTime.strftime("%I:%M %p")

        store_info = {
            'id': store.id,
            'title': store.title,
            'subtitle': store.subtitle,
            'time': f'{startTime} - {endTime}',
            'distance': store.distance,
        }
        store_data.append(store_info)

    return JsonResponse(store_data, safe=False)

def store_detail(request, store_id):
    store = get_object_or_404(Store, id=store_id)

    startTime = store.startTime.strftime("%I:%M %p")
    endTime = store.endTime.strftime("%I:%M %p")

    memu = Menu.objects.filter(store_id=store_id)[0]
    price = memu.price

    store_info = {
        'id': store.id,
        'title': store.title,
        'subtitle': store.subtitle,
        'time': f'{startTime} - {endTime}',
        'distance': store.distance,
        'price': price,
    }

    return JsonResponse(store_info, safe=False)

def view_menu(request, store_id):
    signdoc = get_object_or_404(Menu, pk=store_id)

    menus = Menu.objects.filter(store_id=signdoc.store_id)
    
    memu_data = []
    for menu in menus:
        menu_info = {
            'id': menu.id,
            'name': menu.name,
            'price': menu.price,
        }
        memu_data.append(menu_info)

    return JsonResponse(memu_data, safe=False)

def update_point(request):

    if request.method == 'GET':
        user_id = request.GET.get('id', None)
        user_step = request.GET.get('step', 0)
        user = get_object_or_404(UserProfile, pk=user_id)

        user.points += int(user_step / 5)
        user.total_steps += user_step
        user.save()

        return HttpResponse("")








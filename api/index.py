from sanic import Sanic
from sanic.request import Request
from sanic.response import json

app = Sanic()

@app.get('/api/python/dummy')
async def index(request: Request):
    return json({"hello": "world"})

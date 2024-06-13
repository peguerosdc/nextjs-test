from sanic import Sanic
from sanic.request import Request
from sanic.response import json

app = Sanic()

# This endpoint has to match the folder structure and will be the calling endpoint
@app.get('/search/index')
async def index(request: Request):
    return json({"hello": "world"})

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
app = FastAPI()

origins = [
    "http://localhost.tiangolo.com",
    "https://localhost.tiangolo.com",
    "http://localhost",
    "http://localhost:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

text1 = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, \
    when an unknown printer took a galley of type and scrambled it to make a type specimen book.\
          It has survived not only five centuries, but also the leap into electronic typesetting, \
            remaining essentially unchanged. "
text2 = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, \
    when an unknown printer took a galley of type and scrambled it to make a type specimen book.\
          It has survived not only five centuries, but also the leap into electronic typesetting, \
            remaining essentially unchanged. "
text3 = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, \
    when an unknown printer took a galley of type and scrambled it to make a type specimen book.\
          It has survived not only five centuries, but also the leap into electronic typesetting, \
            remaining essentially unchanged. "

@app.get('/project-1')
async def get_body():
    return {"data":\
            [{"id":0,"text":text1,"image":"UIDesign"},
            {"id":1,"text":text2,"image":"WebDesign"},
            {"id":2,"text":text3,"image":"AppDesign"}]
            }
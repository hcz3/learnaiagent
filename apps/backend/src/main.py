from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# CORS settings - allow all origins for demo, adjust as needed
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Import and include routers
def include_routers(app: FastAPI):
    from .routers import demo
    app.include_router(demo.router)

include_routers(app)

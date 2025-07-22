from fastapi import APIRouter

router = APIRouter()

@router.get("/test")
def test():
    return {"message": "Backend is up and running"} 
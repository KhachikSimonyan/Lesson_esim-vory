# Mini Django Auth Project

Small Django project with:
- Registration
- Login
- Logout
- Protected dashboard
- HTML, CSS, JS

## Run

```bash
python -m venv venv
source venv/bin/activate  # Windows: venv\Scripts\activate
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver
```

## URLs

- `/` home page
- `/register/` register page
- `/login/` login page
- `/dashboard/` protected page

## Notes

- Logout is implemented with a POST form for compatibility with modern Django auth behavior.
- After registration, the user is logged in automatically.

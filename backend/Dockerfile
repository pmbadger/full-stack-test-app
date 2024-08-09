FROM python:3.11
WORKDIR /app
RUN pip install poetry
COPY pyproject.toml poetry.lock* /app/
RUN poetry install
COPY . /app/
EXPOSE 8000
CMD ["poetry", "run", "python", "manage.py", "runserver", "0.0.0.0:8000"]
# Use an official Python runtime as a parent image
FROM python:3.8.0b2-slim-buster

# Set the working directory to /app
WORKDIR /app

# Copy the current directory contents into the container at /app
COPY . /app

# Install any needed packages specified in requirements.txt
RUN apt-get update
RUN apt-get upgrade
RUN pip3 install --upgrade setuptools
RUN pip install --trusted-host pypi.python.org -r requirements.txt

# Make port 80 available to the world outside this container
EXPOSE 80

# Define environment variable
ENV NAME World

# Run spg30.py when the container launches
CMD ["python3", "spg30.py"]
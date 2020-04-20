function sendError(path, res) {
    return `Oops! Fetch('${path}') failed: Express server responded with HTTP: [${res.status} ${res.statusText}].
    
    (Note: this error is custom to Moodify. Google will not help you). For more information about the request, check Network console. For the response, check Express logs.`;
  }

  
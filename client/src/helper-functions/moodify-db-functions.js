function sendError(path, res) {
  return `Oops! Fetch('${path}') failed: Express server responded with HTTP: [${res.status} ${res.statusText}].
    
    (Note: this error is custom to Moodify. Google will not help you). For more information about the request, check Network console. For the response, check Express logs.`;
}

export function getAllMoods() {
  const path = '/moods';
  return fetch(path, {
    headers: {
      Accept: 'application/json',
    },
  })
    .then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        throw new Error(sendError(path, res));
      }
    })
    .catch(console.error);
}

export function getAffirmationByMood(mood) {
  const path = `/moods/${mood}/affirmations`;
  return fetch(path, {
    headers: {
      Accept: 'application/json',
    },
  })
    .then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        throw new Error(sendError(path, res));
      }
    })
    .catch(console.error);
}

export function getAllVoices() {
  const path = '/voicelist';
  return fetch(path, {
    headers: {
      Accept: 'application/json',
    },
  })
    .then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        throw new Error(sendError(path, res));
      }
    })
    .catch(console.error);
}

export function createAffirmation({ affirmation, mood }) {
  const path = `/moods/${mood}/affirmations`;
  return fetch(path, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ affirmation, mood }),
  })
    .then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        throw new Error(sendError(path, res));
      }
    })
    .catch(console.error);
}

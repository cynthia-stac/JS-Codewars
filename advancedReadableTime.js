function formatDuration (seconds) {
  if (seconds === 0) return 'now'
  
  let years = Math.floor(seconds / 31536000)
  seconds = seconds - (years * 31536000)
  
  let days = Math.floor(seconds / 86400)
  seconds = seconds - (days * 86400)
  
  let hours = Math.floor(seconds / 3600)
  seconds = seconds - (hours * 3600)
  
  let minutes = Math.floor(seconds / 60)
  seconds = seconds - (minutes * 60)
  
  let time = []
  
  if (years) time.push(years + (years === 1 ? ' year' : ' years'))
  if (days) time.push(days + (days === 1 ? ' day' : ' days'))
  if (hours) time.push(hours + (hours === 1 ? ' hour' : ' hours'))
  if (minutes) time.push(minutes + (minutes === 1 ? ' minute' : ' minutes'))
  if (seconds) time.push(seconds + (seconds === 1 ? ' second' : ' seconds'))
  
  if (time.length === 1) return time[0];

  let last = time.pop();
  return time.join(", ") + " and " + last;
}
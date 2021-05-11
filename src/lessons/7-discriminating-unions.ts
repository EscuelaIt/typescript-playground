interface NetworkLoadingState {
  // Type literal
  state: 'loading'
}

interface NetworkFailedState {
  state: 'failed'
  code: number
}

interface NetworkSuccessState {
  state: 'success'
  response: string
}

type NetworkState = NetworkLoadingState | NetworkFailedState | NetworkSuccessState

const networkState: NetworkState =
  Math.random() > 0.7
    ? Math.random() < 0.3
      ? { state: 'loading' }
      : { response: 'foo', state: 'success' }
    : { state: 'failed', code: 404 }

function getStatus() {
  let status: string
  switch (networkState.state) {
    case 'failed':
      // OK
      status = 'error'
      networkState.code
      break
    case 'loading':
      // @ts-expect-error
      networkState.code
      status = 'loading'
      break
    case 'success':
      status = 'success'
      // OK
      networkState.response
      break
  }

  return status
}

export {}

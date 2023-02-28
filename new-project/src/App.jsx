
import { AuthProvider } from './auth'
import { AppRouter } from './router/AppRouter'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <AuthProvider>
      <AppRouter />
    </AuthProvider>
  )
}

export default App

import { Page } from './style';
import { Home, Projects } from 'containers';

export function HomePage() {
  return (
    <Page>
      <Home />
      <Projects />
    </Page>
  )
}
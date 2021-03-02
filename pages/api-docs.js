import { RedocStandalone } from 'redoc';

export default function ApiDocs() {
  return (
    <>
      <RedocStandalone specUrl="/spec/swagger.json"/>
    </>
  )
}

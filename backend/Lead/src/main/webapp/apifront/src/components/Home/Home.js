import React, {useState, useEffect} from 'react'
import { Layout, Button } from 'antd';
import { ListaLeads, CriarEditarLead } from '../../components/';
import axios from 'axios';

import './Home.scss'

const { Header, Content } = Layout;

const baseUrl = 'http://localhost:8080/lead';

const Home = () => {
const [showCreateModal, setShowCreateModal] = useState(false)
const [actionType, setActionType] = useState(null)
const [lead, setLead] = useState([])
const [editData, setEditData] = useState(null)

    useEffect(() => {
        axios.get(baseUrl).then((response) => {
        setLead(response.data)})
    }, [])


return (
<Layout>
    <Header
      style={{
        position: 'fixed',
        zIndex: 1,
        width: '100%',
      }}
    >
      <div className="logo" />
    </Header>
    <Content
      className="site-layout"
      style={{
        padding: '0 50px',
        marginTop: 64,
      }}
    >
      <div
        className="site-layout-background"
        style={{
          padding: 24,
          minHeight: 380,
        }}
      >
        <Button className="criar" type="default" onClick={() => {setShowCreateModal(true); setActionType('criar')}}>
        Criar novo lead
        </Button>
        <CriarEditarLead
        showCreateModal={showCreateModal}
        setShowCreateModal={setShowCreateModal}
        actionType={actionType}
        setActionType={setActionType}
        baseUrl={baseUrl}
        initialValues={editData}
        setLead={setLead}
        />
        <ListaLeads
        setShowCreateModal={setShowCreateModal}
        setActionType={setActionType}
        baseUrl={baseUrl}
        setEditData={setEditData}
        lead={lead}
        setLead={setLead}/>
      </div>
    </Content>
  </Layout>
  )


}
export default Home
import React from 'react'
import { Divider, List, Button } from 'antd';
import axios from 'axios';

const ListaLeads = ({setShowCreateModal, setActionType, baseUrl, setEditData, lead, setLead}) => {

    const onDelete = (id) => {
        axios.delete(`${baseUrl}/${id}`).then((response) => {
            alert("Lead excluido com sucesso!");
            reLoad()
        })
}

    //Recarrega a lista depois de excluir
    const reLoad = () => {
        axios.get(baseUrl).then((response) => {
        setLead(response.data)})
    }

/*Peco desculpas pelo formato do codigo, nao tinha um plugin que possa me ajudar,
formatei o que foi possivel*/
return(
<>
    <Divider orientation="center">Lista Leads</Divider>
        <List
          bordered
          dataSource={lead}
          renderItem={(item) => (
            <List.Item
            actions={[
            <Button
            onClick={() =>
            {setShowCreateModal(true);
            setActionType('editar');
            setEditData({id: item.id, nome: item.nome, sobrenome: item.sobrenome, nascimento: item.nascimento, telefone: item.telefone
            })}}>
            Editar
            </Button>,
            <Button type="danger" onClick={() => onDelete(item.id)}>Excluir</Button>,]}>
              {item.nome + ' ' + item.sobrenome}
            </List.Item>
          )}
        />
  </>
)
}

export default ListaLeads
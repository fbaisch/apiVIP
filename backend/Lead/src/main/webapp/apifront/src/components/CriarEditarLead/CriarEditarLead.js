import React, { useEffect } from 'react';
import { Modal, Button, Form, Input } from 'antd'
import axios from 'axios'

const CriarEditarLead = ({showCreateModal, setShowCreateModal, actionType, setActionType, baseUrl, initialValues = {}, setLead}) => {
const [form] = Form.useForm();

useEffect(() => {
    if (showCreateModal) {
        form.setFieldsValue(initialValues)}
}, [showCreateModal, form, initialValues]);

  const onCreate = () => {
    form.validateFields().then(values => {
        const data = {
            nome: values.nome,
            sobrenome: values.sobrenome,
            nascimento: values.nascimento,
            telefone: values.telefone
            }
        axios.post(baseUrl, data).then((response) => {
        alert("Lead criado com sucesso!")
        setShowCreateModal(false)
        reLoad()
        console.log(response)})})
  };

  const onEdit = () => {
    form.validateFields().then(values => {
        const data = {
            nome: values.nome,
            sobrenome: values.sobrenome,
            nascimento: values.nascimento,
            telefone: values.telefone
        }
        axios.put(`${baseUrl}/${initialValues.id}`, data).then((response) => {
        alert("Lead editado com sucesso!");
        setShowCreateModal(false)
        reLoad()
        console.log(response)})
    })
  }

  const onCancel = () => {
    setShowCreateModal(false)
    setActionType(null)
    form.resetFields()
  }

  const reLoad = () => {
    axios.get(baseUrl).then((response) => {
    setLead(response.data)})
  }


return(
      <Modal
      title={actionType === 'criar' ? 'Criar' : 'Editar'}
      visible={showCreateModal}
      footer={[
          <Button type="danger" onClick={() => onCancel() }>
            Cancelar
          </Button>,
          <Button onClick={actionType === 'criar' ? () => onCreate() : () => onEdit()}>
            Ok
          </Button>,
      ]}
      centered
      closable={false}>
        <Form
              form={form}
              name="basic"
              labelCol={{ span: 8 }}
              wrapperCol={{ span: 16 }}
              initialValues={{ data: [''] }}
              autoComplete="off"

            >
              <Form.Item
                label="Nome"
                name="nome"
                rules={[{ required: true, message: 'O nome e obrigatório' }]}
              >
                <Input placeholder="Digite um nome"/>
              </Form.Item>

              <Form.Item
                label="Sobrenome"
                name="sobrenome"
              >
                <Input placeholder="Digite um sobrenome" />
              </Form.Item>
              <Form.Item
                label="Data de nascimento"
                name="nascimento"
                rules={[{ required: true, message: 'A data de nascimento e obrigatória' }]}
              >
                <Input  placeholder="DD/MM/YYYY"/>
              </Form.Item>
              <Form.Item
                label="Telefone"
                name="telefone"
              >
                <Input placeholder="xx-xxxxx-xxxx" />
              </Form.Item>

            </Form>
      </Modal>)
}

export default CriarEditarLead
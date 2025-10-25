import {MdEmail, MdLock, MdPerson} from 'react-icons/md';

import { useNavigate } from 'react-router-dom';

import {useForm} from "react-hook-form";

import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from "yup";

import { api } from '../../services/api';

import {Button} from "../../components/Button";
import {Header} from "../../components/Header";
import {Input} from "../../components/Input";

import { Column, Container, CriarText, EsqueciText, Row, SubtitleLogin, Title, TitleLogin, Wrapper } from "./styles";

const schema = yup.object({
  nome: yup.string().required('Campo Obrigatorio'),
  email: yup.string().email('E-mail invalido!').required('Campo Obrigatorio'),
  password: yup.string().min(3, 'No minimo 3 caracteres!').required('Campo Obrigatorio'),
}).required();

const Cadastro = () => {

  const navigate = useNavigate();

  const { control, handleSubmit, formState: {errors}} = useForm({
    resolver: yupResolver(schema),
    mode: 'onChange',
  });

  const onSubmit = async formData => {
    try{
      const { data } = await api.post(`users?email=${formData.email}&senha=${formData.password}`)
      if(data.length === 1){
        navigate('/feed')
      }else{
        console.log(data);
        alert('Email ou senha inválido')
      }
    }catch{
      alert('Houve um erro, tente novamente.')
    }
  };

  return (
    <>
    <Header />
    <Container>
      <Column>
        <Title>
          A plataforma para você aprender com experts, dominar as principais tecnologias e entrar mais rápido nas
          empresas mais desejadas.
        </Title>
      </Column>
      <Column>
        <Wrapper>
          <TitleLogin>Comece agora grátis</TitleLogin>
          <SubtitleLogin>Crie sua conta e make the change._</SubtitleLogin>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Input name="nome"   errorMessage = {errors?.nome?.message} control={control} placeholder="Nome" leftIcon={<MdPerson />}></Input>
            <Input name="email"   errorMessage = {errors?.email?.message} control={control} placeholder="E-mail" leftIcon={<MdEmail />}></Input>
            <Input name="password"  errorMessage = {errors?.password?.message} control={control} placeholder="Senha" type="password" leftIcon={<MdLock />}></Input>
            <Button title="Entrar" variant="secondary" type="submit"/>
          </form>
          <Row>
            <EsqueciText>Esqueci Minha Senha</EsqueciText>
            <CriarText>Criar Conta</CriarText>
          </Row>
        </Wrapper>
      </Column>
    </Container>
    </>
  )
}

export {Cadastro}
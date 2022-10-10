import React, { useMemo } from 'react';
import { Skills, SkillsCategory } from 'interfaces';
import {
  Flex,
  Item,
  Page,
  Main,
  Title,
} from './style';

type SkillsByCategory = Record<SkillsCategory, Skills['skills']>

export function SoftSkills({ skills }: Skills) {
  const skillsByCategory = useMemo(() => {
    const skillsFormatted = skills
      .reduce<SkillsByCategory>((acc, current) => {
        return {
          ...acc,
          [current.category]: [...acc[current.category], current]
        };
      }, {
        'DBs': [],
        tools: [],
        testing: [],
        'back-end': [],
        'front-end': [],
      });

    return skillsFormatted;

  }, [skills])

  return (
    <Page>
      <Main>
        <h1>Skills</h1>
        <span>Linguagens/Ferramentas/Bancos de dados que domino</span>
      </Main><br/>

      <Title>Front-End</Title>
      <Flex>
        {React.Children.toArray(
          skillsByCategory['front-end']
            .map(({ Icon, description, color, name }) => {
              return (
                <Item>
                  <Icon color={color} />
                  <h4>{name}</h4>
                </Item>
              )
            })
        )}
      </Flex>

      <Title>Back-End</Title>
      <Flex>
        {React.Children.toArray(
          skillsByCategory['back-end']
            .map(({ Icon, description, color, name }) => {
              return (
                <Item>
                  <Icon color={color} />
                  <h4>{name}</h4>
                </Item>
              )
            })
        )}
      </Flex>

      <Title>Banco de dados</Title>
      <Flex>
        {React.Children.toArray(
          skillsByCategory['DBs']
            .map(({ Icon, description, color, name }) => {
              return (
                <Item>
                  <Icon color={color} />
                  <h4>{name}</h4>
                </Item>
              )
            })
        )}
      </Flex>

      <Title>Testes</Title>
      <Flex>
        {React.Children.toArray(
          skillsByCategory['testing']
            .map(({ Icon, description, color, name }) => {
              return (
                <Item>
                  <Icon color={color} />
                  <h4>{name}</h4>
                </Item>
              )
            })
        )}
      </Flex>

      <Title>Ferramentas</Title>
      <Flex>
        {React.Children.toArray(
          skillsByCategory['tools']
            .map(({ Icon, description, color, name }) => {
              return (
                <Item>
                  <Icon color={color} />
                  <h4>{name}</h4>
                </Item>
              )
            })
        )}
      </Flex>
    </Page>
  )
}
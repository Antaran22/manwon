import List from '../components/List'
import React from 'react'

function Team() {
  return (
    <>
       <article>
        <section className={"list"}>
          <h1>만원 프로젝트</h1>
          <ol>
            {[ "1팀", "2팀", "3팀", "4팀", "5팀", "6팀", "7팀", "8팀", "9팀", "10팀", "11팀", "12팀", "13팀", "14팀", "15팀", "16팀", "17팀", "18팀",].map((list) => {
              return <List key={list} list={list} />;
            })}
          </ol>
        </section>
      </article>
    </>
  )
}

export default Team
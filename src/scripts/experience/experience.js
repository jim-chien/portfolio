import React, { Component } from 'react';
import { RAvatron } from '@scripts/base/components/avatron/avatron';
import { RCol } from '@scripts/base/components/col/col';
import { RHero } from '@scripts/base/components/hero/hero';
import { RRow } from '@scripts/base/components/row/row';
import { RSection } from '@scripts/base/components/section/section';
import { RViewport } from '@scripts/base/components/viewport/viewport';

export class Experience extends Component {
  render() {
    return (
      <RViewport>
        <RHero title="Experience" size="small" />
        <RSection>
          <RRow>
            <RCol size="6">
              <RAvatron
                image="logo-glorious-codes.png"
                title="Glorious Codes"
                subtitle="Aug.2018 - Present"
                url="https://glorious.codes" />
            </RCol>
            <RCol size="6">
              <p>
                I am very proud of having offered to the JavaScript community
                a few open source libraries. I specially highlight <a
                href="https://glorious.codes/demo" target="_blank">Glorious Demo
                </a> that, beyond to be tweeted by <a
                href="https://twitter.com/zenorocha/status/1057275408935194625"
                target="_blank">Zeno Rocha</a>, <a href="https://twitter.com/css/status/1060325303459962882" target="_blank">
                CSS Tricks</a> e <a href="https://twitter.com/0310lan/status/1085420922159300608" target="_blank">
                まさとらん</a>, got dozens of upvotes on <a href="https://news.ycombinator.com/item?id=18363668" target="_blank">
                Hacker News</a> and <a href="https://www.reddit.com/r/javascript/comments/cavci6/the_easiest_way_of_creating_animations_to_show/" target="_blank">
                Reddit</a>, and has been featured as <b>Product of the Day
                </b> on <a href="https://www.producthunt.com/posts/glorious-demo" target="_blank">
                Product Hunt</a>.
              </p>
            </RCol>
          </RRow>
          <RRow offset="10">
            <RCol size="6">
              <RAvatron
                image="logo-conta-azul.jpg"
                title="Conta Azul"
                subtitle="Jul.2013 - Aug.2015, Mar.2017 - Sep.2019"
                url="https://contaazul.com" />
            </RCol>
            <RCol size="6">
              <p>
                Among a lot of features developed in almost 5 years at Conta
                Azul, I contributed with a few projects that I am very proud
                of. In 2017, I had the opportunity to contribute to a
                company’s internal product as the only front-end in the team,
                being 100% responsible for designing all the web app's views
                too and, even more important, put into practice the first and <b>
                fully component-based UI project</b> made in the company.
              </p>
              <p>
                A little more than one year after starting that project, I
                have begun to disseminate the component-based architecture
                inside the company, at guilds and front-end discussions, and
                outside the company, writing an article entitled <b>Components
                beyond reuse</b> published in portuguese on <a href="https://tableless.com.br/componentes-alem-do-reuso/" target="_blank">
                Tableless</a> and in english on <a href="https://hackernoon.com/components-beyond-reuse-6cef6848a748" target="_blank">
                Hackernoon</a>.
              </p>
              <p>
                By the end of 2018, the company finally decided to replace the
                MVC approach in favor of a component-based approach on the
                main product. That was the moment which components became
                first-class citizens in every tech discussion. A dedicated
                team was created to handle <b>our internal component library</b> putting
                together the <b>most experienced front-end developers</b> and
                UX designers.
              </p>
              <p>
                Focusing on <b>high-quality</b> - <i>clean code and automated tests
                </i> - and <b>productivity</b>, our components have saved hours
                of programming time and has contributed to increase user
                experience consistency along the application.
              </p>
              <p>
                Beyond delivering great results to the product and to the
                company, I have <b>created our own documentation tool</b>. We
                struggled to have a unified documentation containing our
                legacy - <em>AngularJS</em> - and modern - <em>VueJS</em> components. <a
                href="https://www.npmjs.com/package/@glorious/pitsby"
                target="_blank">Pitsby</a> solved our problem once and for all.
                It’s open source and has even helped to improve the experience
                of developing new components as well as increasing the
                component library adoption by product teams.
              </p>
            </RCol>
          </RRow>
          <RRow offset="10">
            <RCol size="6">
              <RAvatron
                image="logo-jobscore.png"
                title="JobScore"
                subtitle="Aug.2015 - Oct.2016"
                url="https://jobscore.com" />
            </RCol>
            <RCol size="6">
              <p>
                In a brief period at Jobscore I had the opportunity to
                collaborate to the website’s redesign project and its later
                improvements. Also, I introduced the AMD concept to the
                JavaScript code making it modular, reusable and, more
                important, fully testable. Jobscore was also the place where
                I first touched Ruby and Rails.
              </p>
            </RCol>
          </RRow>
          <RRow offset="10">
            <RCol size="6">
            <RAvatron
              title="Graphic Design"
              subtitle="Mar.2006 - Jul.2013" />
            </RCol>
            <RCol size="6">
              <p>
                From 2006 to 2013 I worked for a couple of advertising agencies.
                A few of the works I did can still be seen on my <a href="https://www.behance.net/rafaelcamargo" target="_blank">
                Behance</a> profile. I have been doing graphic design for a few hobby
                projects too. The latest works can be seen on my <a href="https://dribbble.com/rcamargo" target="_blank">
                Dribbble</a> profile.
              </p>
            </RCol>
          </RRow>
        </RSection>
      </RViewport>
    );
  }
}
import {Component} from "preact";

import {DigitalClock} from "./clocks/exports.js";

type Props = Record<string, unknown>;

type State = {
  date: Date;
  intervalId: number;
};

export class App extends Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      date: new Date(),
      intervalId: window.setInterval(() => {
        this.setState({date: new Date()});
      }, 1000),
    };
  }

  render() {
    const {date} = this.state;
    const clocks: Array<[string, string]> = [["digital-clock", "Digital"]];
    return (
      <>
        <section class="main">
          <h1>Clocks</h1>
          <div class="links">
            {clocks.map(([id, name]) => (
              <a href={`#${id}`}>{name}</a>
            ))}
          </div>
        </section>

        <DigitalClock id={clocks[0][0]} date={date} />

        <a class="back-to-top" href="#" title="Back to top">
          ↑
        </a>
      </>
    );
  }
}

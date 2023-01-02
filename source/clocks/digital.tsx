import {format} from "fecha";
import {Component} from "preact";

type Props = {
  id: string;
  date: Date;
};

export class DigitalClock extends Component<Props> {
  render() {
    const time = format(this.props.date, "HH:mm:ss");

    return (
      <>
        <section id={this.props.id} class="digital-clock">
          <span class="time">{time}</span>
        </section>
      </>
    );
  }
}

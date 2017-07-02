import * as React from "react";

export interface HelloProps {
  compiler: string;
  framework: string;
  name: string
}

export class Hello extends React.Component<HelloProps, undefined> {
  render() {
    return (
      <h1>Hello {this.props.name} from {this.props.compiler} and {this.props.framework}</h1>
    )
  }
}
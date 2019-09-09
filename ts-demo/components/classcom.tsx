import * as React from "react";

const todoInputDefaultProps = {
    inputSetting: {
        maxlength: 20,
        placeholder: '请输入todo',
    }
}

// <https://juejin.im/post/5d3aad8b6fb9a07ecb0bef5e#heading-5>
// TODO: Partial是个什么鬼东西？
type Props = {
    handleSubmit: (value: string) => void
    children: React.ReactNode
} & Partial<typeof todoInputDefaultProps>


// TODO: 这一坨没看懂啥意思，目的知道：是为了防止undefined报错
const createPropsGetter = <DP extends object>(defaultProps: DP) => {
    return <P extends Partial<DP>>(props: P) => {
        type PropsExcludingDefaults = Omit<P, keyof DP>
        type RecomposedProps = DP & PropsExcludingDefaults

        return (props as any) as RecomposedProps
    }
}

const getProps = createPropsGetter(todoInputDefaultProps)



interface State {
    itemText: string;
}



export class ClassCom extends React.Component<Props, State> {
    static defaultProps = todoInputDefaultProps;

    // 需要注意的是，在createRef这里需要一个泛型，这个泛型就是需要ref组件的类型，因为这个是input组件，所以类型是HTMLInputElement，当然如果是div组件的话那么这个类型就是HTMLDivElement
    private inputRef = React.createRef<HTMLInputElement>();

    constructor(props: Props) {
        super(props);
        this.state = {
            itemText: "",
        }
        this.upateValue.bind(this)
        this.handleSubmit.bind(this)
    }

    private upateValue(e: React.ChangeEvent<HTMLInputElement>) {
        this.setState({
            itemText: e.target.value,
        })
    }

    private handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        if (!this.state.itemText.trim()) {
            return
        }
        this.props.handleSubmit(this.state.itemText)
        this.setState({ itemText: '' })
    }

    render() {

        const { inputSetting } = getProps(this.props)

        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    maxLength={inputSetting.maxlength}
                    ref={this.inputRef}
                    className="edit"
                    value={this.state.itemText}
                    onChange={this.upateValue}
                />
                <button type="submit">提交</button>
            </form>
        )

    }
}
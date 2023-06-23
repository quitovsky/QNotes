import "@/styles/Settings.scss"
import Select from "@/ui/Select";
import {$isSettings} from "@/utils/Store";

export default function Settings () {
    return (<>
        <div className="settings-container">
            <div className="settings">
                <div className="settings-header">
                    <div className="settings-header-title">Settings</div>
                    <div onClick={() => $isSettings.set(false)} className={`settings-header-close`}><svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1L6 6M11 11L6 6M6 6L11 1L1 11" stroke="#9B9B9B"/>
                    </svg>
                    </div>
                </div>
                <div className="settings-content">
                    <div className="settings-content-element">
                        <div className="settings-content-element-title">Store method</div>
                        <Select options={["localStorage", "cloud (coming soon...)"]} defaultIndex={1} onValueChange={(e) => console.log(e)}/>
                    </div>
                </div>
                <div className="settings-footer">
                    <a href={"https://github.com/quitovsky/QNotes"} target={"_blank"}>GitHub</a>
                </div>
            </div>
        </div>
    </>)
}
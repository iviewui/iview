// Type definitions for iview 2.5.1
// Project: https://github.com/iview/iview
// Definitions by: yangdan
// Definitions: https://github.com/yangdan8/iview.git
import Vue from "vue";

export default Alert;

export interface Alert extends Vue {
  /**
   * 警告提示样式，可选值为info、success、warning、error
   * 默认值info
   */
  type: 'info' | 'success' | 'warning' | 'error';
  /**
   * 是否可关闭
   * 默认值false
   */
  closable: boolean;
  /**
   * 是否显示图标
   * 默认值false
   */
  'show-icon': boolean;
  /**
   * 关闭时触发
   */
  $emit(eventName: 'on-close', event: HTMLElement): this;
  /**
   * slot插槽对象
   */
  $slot: {
    /**
     * 警告提示内容
     */
    '': Vue,
    /**
     * 警告提示辅助性文字介绍
     */
    desc: Vue,
    /**
     * 自定义图标内容
     */
    icon: Vue,
    /**
     * 自定义关闭内容
     */
    close: Vue
  }
}
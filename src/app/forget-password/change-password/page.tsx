"use client";
import { useResetPasswordMutation } from "@/redux/Api/authApi";
import { Button, Form, Input } from "antd";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { toast } from "sonner";

const UpdatePassword = () => {
  const [resetPassword] = useResetPasswordMutation();
  const navigate = useRouter()
  const onFinish = (values: any) => {
    const data = {
      email: localStorage.getItem("forgetPass"),
      newPassword: values?.password,
      confirmPassword: values?.confirmPassword,
    };
    resetPassword(data)
      .unwrap()
      .then((payload) => {
        toast.success(payload?.message)
        navigate.push('/login')
        localStorage.removeItem("forgetPass")
      })
      .catch((error) => toast.error(error?.data?.message));
  };

  return (
    <div
      style={{
        width: "100%",
        background: "#EBEBEB",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Form
        name="normal_login"
        className="login-form"
        initialValues={{
          remember: true,
        }}
        style={{
          width: "630px",
          background: "white",
          borderRadius: "12px",
          padding: "90px 57px",
        }}
        onFinish={onFinish}
      >
        <h1
          style={{
            fontSize: "32px",
            color: "#38393E",
            marginBottom: "13px",
            textAlign: "center",
            fontWeight: "bold",
          }}
        >
          Set a new password
        </h1>
        <p
          style={{
            width: "275px",
            color: "#7D7E8A",
            fontSize: "14px",
            fontWeight: 400,
            textAlign: "center",
            margin: "0 auto 0 auto",
          }}
        >
          Create a new password. Ensure it differs from previous ones for
          security
        </p>

        <div style={{ margin: "45px 0 20px 0" }}>
          <label
            style={{ display: "block", color: "#38393E", marginBottom: "5px" }}
            htmlFor=""
          >
            New Password
          </label>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your new Password!",
              },
            ]}
            style={{ marginBottom: 0 }}
          >
            <Input.Password
              type="password"
              placeholder="Enter New password"
              style={{
                border: "1px solid #E0E4EC",
                height: "52px",
                background: "white",
                borderRadius: "8px",
                outline: "none",
              }}
            />
          </Form.Item>
        </div>

        <div style={{ marginBottom: "40px" }}>
          <label
            style={{ display: "block", color: "#38393E", marginBottom: "5px" }}
            htmlFor="email"
          >
            Confirm Password
          </label>
          <Form.Item
            style={{ marginBottom: 0 }}
            name="confirmPassword"
            rules={[
              {
                required: true,
                message: "Please input your Confirm Password!",
              },
            ]}
          >
            <Input.Password
              type="password"
              placeholder="Enter Confirm password"
              style={{
                border: "1px solid #E0E4EC",
                height: "52px",
                background: "white",
                borderRadius: "8px",
                outline: "none",
              }}
            />
          </Form.Item>
        </div>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            block
            style={{
              border: "none",
              height: "51px",
              background: "#050505",
              color: "white",
              borderRadius: "30px",
              outline: "none",
              marginTop: "",
            }}
          >
            <Link
              href={"/login"}
              className="login-form-forgot "
              style={{ color: "#FFF" }}
            >
              Reset Password
            </Link>
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default UpdatePassword;
